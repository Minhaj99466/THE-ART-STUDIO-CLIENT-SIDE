import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";
import { GetCity } from "react-country-state-city";

export default function Example({onCityClick}) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["city"],
    queryFn: async () => {
      try {
        const countryId = 101;
        const stateId = 4028;
        const cities = await GetCity(countryId, stateId);
        return cities;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  });

  const [selected, setSelected] = useState(data && data[0]);
  const [query, setQuery] = useState("");

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner color="blue" className="h-10 w-10 " />
      </div>
    );
  }

  if (error) {
    return <h1>Something went Wrong</h1>;
  }

  const filteredCity =
    query === ""
      ? data
      : data.filter((city) =>
          city.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
        <label  className="block text-sm font-medium text-gray-700">
            City
          </label>
          <div className="relative w-full cursor-default overflow-hidden rounded-md border border-[#04040450]    focus-visible:ring-2  focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(city) => city.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 z-50 focus:outline-none sm:text-sm">
              {filteredCity.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredCity.map((city) => (
                  <Combobox.Option 
                  onClick={() => onCityClick(city.name)}
                    key={city.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-[#90947d] text-white" : "text-gray-900"
                      }`
                    }
                    value={city}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {city.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

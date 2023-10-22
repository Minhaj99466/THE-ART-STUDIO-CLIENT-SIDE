import { Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";


function Notifications() {
    // const {user} = useSelector((state)=>state.user)
  return (
    <>
    <h1 className="font-sans text-amber-900">Notifications</h1>
      <Tabs>
        <Tabs.TabPane className="" tab="Seen" key={0}>
          <div className="flex justify-end">
    <h1 className="underline">Mark all as Seen</h1>
          </div>
    {/* {user.Notifications.map((not)=>(
        <div>
            <div>
                {not.message}
            </div>
        </div>
    ))} */}


        </Tabs.TabPane>
        <Tabs.TabPane tab="Unseen" key={1}>
        <div className="flex justify-end">
    <h1 className="underline">Delete all</h1>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}

export default Notifications;

"use client";

import React, { useState } from "react";
import Header from "@/app/(components)/Header";

type UserSettings = {
  label: string;
  value: string | boolean;
  type: "text" | "toggle";
};

const mockSettings: UserSettings[] = [
  { label: "Username", value: "Bruno Uko", type: "text" },
  { label: "Email", value: "muhire2@gmail.com", type: "text" },
  { label: "Notification", value: true, type: "toggle" },
  { label: "Mode Nuit", value: false, type: "toggle" },
  { label: "Langue", value: "French", type: "text" },
];

const Settings = () => {
  const [userSettings, setUserSettings] =
    useState<UserSettings[]>(mockSettings);

  const handleToggleChange = (index: number) => {
    const settingsCopy = [...userSettings];
    settingsCopy[index].value = !settingsCopy[index].value as boolean;
    setUserSettings(settingsCopy);
  };

  return (
    <div className="w-full">
      <Header name="Paramètres utilisateurs" />
      <div className="shadow-md overflow-x-auto mt-5">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="text-white bg-gray-800">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Paramètre
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Valeur
              </th>
            </tr>
          </thead>
          <tbody>
            {userSettings.map((settings, index) => (
              <tr className="hover:bg-blue-50" key={settings.label}>
                <td className="py-2 px-4">{settings.label}</td>
                <td className="py-2 px-4">
                  {settings.type === "toggle" ? (
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={settings.value as boolean}
                        onChange={() => handleToggleChange(index)}
                      />
                      <div
                        className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-blue-400 peer-focus:ring-4 
                            transition peer-checked:after:translate-x-full peer-checked:after:border-white 
                            after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                            after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                            peer-checked:bg-blue-600"
                      ></div>
                    </label>
                  ) : (
                    <input
                      type="text"
                      className="px-4 py-2 border rounded-lg text-gray-500 focus:outline-none focus:border-blue-500"
                      value={settings.value as string}
                      onChange={(e) => {
                        const settingsCopy = [...userSettings];
                        settingsCopy[index].value = e.target.value;
                        setUserSettings(settingsCopy);
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Settings;

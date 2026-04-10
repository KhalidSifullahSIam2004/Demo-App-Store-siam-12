import React, { use } from "react";
import { Pie, PieChart, Cell, Legend, Tooltip } from "recharts";
import { InstalledAppsContext } from "../../../Contexts/InstalledAppsContext";
import useDataFetch from "../../../CustomHooks/useDataFetch";

const COLORS = ["#0088FE", "#FF8042"];

const Dashboard = () => {
  const [installedApps] = use(InstalledAppsContext);

  const appsData = useDataFetch();

  const unInstalledApps = appsData.length - installedApps.length;

  const data = [
    { name: "Installed", value: installedApps.length },
    { name: "Uninstalled", value: unInstalledApps },
  ];

  return (
    <div className="grid justify-center my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">
      <h2 className="font-semibold text-3xl mb-16 text-center">
        Installed and Uninstalled Apps
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius="50%"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Dashboard;

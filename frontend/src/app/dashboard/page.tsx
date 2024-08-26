"use client";

import Category from "@/components/Dashboard/Category/Category";
import Toolbar from "@/components/Dashboard/Toolbar/Toolbar";
import Loader from "@/components/Loader/Loader";
import { userApi } from "@/store/api/userApi";

function Dashboard() {
  const { data, isLoading } = userApi.useFetchUserCategoriesQuery();

  if (isLoading && !data) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      <Toolbar />
      <div className="flex flex-col gap-5 w-[90%] mx-auto mt-4">
        {data
          ? data.categories.map((category) => (
              <Category category={category} key={category.id} />
            ))
          : null}
      </div>
    </div>
  );
}

export default Dashboard;

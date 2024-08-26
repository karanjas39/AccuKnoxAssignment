"use client";

import Category from "@/components/Dashboard/Category/Category";
import Toolbar from "@/components/Dashboard/Toolbar/Toolbar";
import Loader from "@/components/Loader/Loader";
import { categoriesApi } from "@/store/api/categories";
import { userApi } from "@/store/api/userApi";

function Dashboard() {
  const { data, isLoading, isSuccess } = categoriesApi.useAllCategoriesQuery();

  if (isLoading && !data && !isSuccess) {
    return <Loader />;
  }

  return (
    <div className="w-full mt-3 mb-3">
      <Toolbar />
      <div className="flex flex-col gap-5 w-[90%] mx-auto mt-4">
        {data && data?.categories?.length
          ? data.categories.map((category) => (
              <Category category={category} key={category.id} />
            ))
          : null}
      </div>
    </div>
  );
}

export default Dashboard;

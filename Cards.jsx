import React from "react";
import { Card } from "../components/ui/Card/Card";
import { data } from "../../data";

export const Cards = () => {
  return (
    <section id="cards" className="max-w-7xl mx-auto px-2 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.length > 0 && data?.map((item) => (
          <Card key={item?.id} details={item} />
        ))}
      </div>
    </section>
  );
};

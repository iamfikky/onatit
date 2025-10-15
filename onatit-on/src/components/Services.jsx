import { useQuery } from "@tanstack/react-query";
import { servicesData } from "../data/services";

const fetchServices = () =>
  new Promise((resolve) => setTimeout(() => resolve(servicesData), 500));

export default function Services() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });

  if (isLoading)
    return <p className="text-center py-10 text-gray-500">Loading services...</p>;
  if (isError)
    return <p className="text-center py-10 text-red-600">Error loading data.</p>;

  return (
    <section id="services" className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-2xl font-bold mb-6 text-accent">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((service) => (
          <div key={service.id} className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

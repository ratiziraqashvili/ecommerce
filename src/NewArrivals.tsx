import NewCard from "./NewCard";

type Props = {};

function NewArrivals({}: Props) {
  return (
    <div className="flex flex-col pt-24 bg-[#F2F0F1] pb-10" id="NewArrivals">
      <div className="text-center font-[heavy] text-3xl md:text-4xl lg:text-5xl mb-6">
        New Arrivals
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-16">
        <NewCard />
      </div>
    </div>
  );
}

export default NewArrivals;

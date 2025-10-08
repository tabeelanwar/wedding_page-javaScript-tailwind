import Weddingcouple from "../../../public/wedding_couple2.jpg"

export default function Marriage () {
    return(
        <div className=" h-[900px] bg-pink-100">
            <div>
                <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col" bis_skin_checked="1">
    <div class="text-center lg:w-4xl" bis_skin_checked="1">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#757575] font-extrabold">THE WEDDING</h1>
      <div class="items-center" bis_skin_checked="1">
        <img
            src="./wedding_location.jpg"
            alt="Couple"
            className="w-[1000px] h-[500px] h-64 object-cover shadow-lg mx-4 mb-10"
        />
        <div className="flex justify-around">
            <div className="leading-10 text-black">
                <h2 className="text-2xl mb-5">When</h2>
                <p className="text-sm mb-5">Wedding Ceremony - 2:00pm</p>
                <p className="text-sm">Reception & Dinner - 5:00pm</p>
            </div>
            <div className="text-black leading-10">
                <h2 className="text-2xl mb-5">Where</h2>
                <p className="text-sm mb-5">Some place, an address</p>
                <p className="text-sm">Some where, some address</p>
            </div>
        </div>
        </div>
    </div>
  </div>
</section>
            </div>
        </div>
    );
}
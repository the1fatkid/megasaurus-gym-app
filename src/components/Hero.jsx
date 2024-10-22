import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center w-full max-w-[800px] mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT&apos;S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Mega<span className="text-deeperBlue">saurus</span>
        </h1>
      </div>
    {/* text-blue-400 */}
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may become{" "}
        <span className="text-deeperBlue font-medium">unbelievably fit</span> and
        accept all risks of being the local{" "}
        <span className="text-deeperBlue font-medium">mass monstrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors{" "}
      </p>
      
      <Button func={()=>{
        window.location.href='#generate';
      }} text="Accept & Begin"/>
    </div>
  );
}

 

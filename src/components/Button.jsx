export default function Button({ text, func}) {

  return (
    <button  onClick={func} className="mx-auto px-8 py-4 rounded-md border-none bg-slate-900 border-2  shadow-[3px_3px_0_0_#00000076]  hover:shadow-[6px_6px_0_0_#00000076] hover:-translate-x-[3px] hover:-translate-y-[3px]">
      <p>
        {text}
      </p>
    </button>
  );
}

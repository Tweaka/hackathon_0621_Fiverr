export default function FormProject(): JSX.Element {
  return (
    <div className="flex flex-col items-center m-12">
      <form
        className="flex flex-col max-w-full max-h-full items-center"
        action=""
      >
        <label htmlFor="">Name Project</label>
        <input type="text" />
        <label htmlFor="">Teammates Required</label>
        <input type="text" />
        <label htmlFor="">Delivery Time</label>
        <input type="text" />
        <label htmlFor="">Image</label>
        <input type="text" />
        <label htmlFor=""> Description</label>
        <textarea maxLength={255}></textarea>
      </form>
      <button className="m-2 bg-Fiverr px-3 py-1 text-white rounded-sm max-w-full font-bold h-8">
        validate
      </button>
    </div>
  );
}

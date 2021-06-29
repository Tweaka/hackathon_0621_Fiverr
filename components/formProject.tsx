export default function FormProject(): JSX.Element {
  return (
    <div className="flex flex-col items-center my-2">
      <form
        className="flex flex-col max-w-full max-h-full items-center"
        action="https://team-rocket.hasura.app/api/rest/post_one_project"
        method="POST"
      >
        <label className="text-gray-600 py-2 " htmlFor="">
          Name Project
        </label>
        <input className="border border-gray-200" type="text" />
        <label className="text-gray-600 py-2" htmlFor="">
          Teammates Required
        </label>
        <input className="border border-gray-200" type="text" />
        <label className="text-gray-600 py-2" htmlFor="">
          Delivery Time (YYYY-MM-DD)
        </label>
        <input className="border border-gray-200" type="text" />
        <label className="text-gray-600 py-2" htmlFor="">
          Image Url
        </label>
        <input className="border border-gray-200" type="text" />
        <label className="text-gray-600 py-2" htmlFor="">
          {" "}
          Description
        </label>
        <textarea
          className="resize-none border border-gray-200"
          cols={60}
          rows={5}
          maxLength={255}
        ></textarea>
        <button
          type="submit"
          className="m-2 bg-Fiverr px-3 py-1 text-white rounded-sm max-w-full font-bold h-8"
        >
          Validate
        </button>
      </form>
    </div>
  );
}

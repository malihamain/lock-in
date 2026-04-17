
type Props = {
    tasks: string[];
};
export default function Tasks({
    tasks
}: Props) {




    return (
       <div className="my-10 mx-5">  {tasks.map((task, index) => (
        <div
          key={index}
          className="flex items-center justify-between flex-1 px-4 py-5  border border-gray-300 rounded-xl bg-white my-3"
        >
          <span className="text-md ">{task}</span>

          <div className="w-5 h-5 rounded-full border border-accent-2 flex items-center justify-center">

          </div>
        </div>
      ))}
      </div>

    );
}
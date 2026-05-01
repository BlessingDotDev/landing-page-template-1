type TaskSelectedProps = {
  name: string;
  keywords: string[];
}

function TaskSelected({ name, keywords}: TaskSelectedProps) {
  return (
    <div key={name} className=" bg-blue-500/10 p-4 rounded-lg">
      <div className="flexcenter">
        <button></button>
      </div>

      <h3 className=" text-md sm:text-lg font-semibold">{name}</h3>
      <h4 className="text-gray-500">
        {keywords.join(', ')}
      </h4>
    </div>
  )
}

export default TaskSelected;
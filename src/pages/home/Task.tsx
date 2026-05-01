type TaskProps = {
  id: string;
  name: string;
  setActive:  any;
  Icon: any;
}

function Task({id, name, setActive, Icon}: TaskProps) {
  return (
    <div
      key={id}
      onClick={() => setActive(id)}
      className="flexcenter flex-shrink-0 flex-col 
                group cursor-pointer gap-2"
    >
      <Icon className="w-6 h-6 text-gray-300
               group-hover:text-green-300 hoverEffect" />
      <h4 className="group-hover:text-green-300 h-12">
        {name}
      </h4>
    </div>
  )
}

export default Task;
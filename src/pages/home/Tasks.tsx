
import {
  Wrench,
  ShoppingCart,
  BookOpen,
  Scissors,
  Truck,
  Laptop,
  Home,
  Leaf,
} from 'lucide-react'


const taskList = [
  {
    name: 'Home Repairs',
    icon: Wrench,
  },
  {
    name: 'Cleaning',
    icon: Home,
  },
  {
    name: 'Outdoors',
    icon: Leaf,
  },
  {
    name: 'Personal Services',
    icon: Scissors,
  },
  {
    name: 'Moving',
    icon: Truck,
  },
  {
    name: 'Digital Services',
    icon: Laptop,
  },
  {
    name: 'Academic Help',
    icon: BookOpen, 
  },
  {
    name: 'Errands',
    icon: ShoppingCart, 
  }
]

function Tasks() {

  return (
    <div className="flexcenter mx-1 gap-8 mt-12 overflow-x-auto snap-x snap-mandatory no-scrollbar">
      {
        taskList.map((task) => {
          return (
            <div 
              key={task.name}
              className="flexcenter flex-shrink-0 flex-col group cursor-pointer gap-2"
            >
              <task.icon className=" w-6 h-6 text-gray-300 group-hover:text-green-300 hoverEffect" />
              <h4 className="group-hover:text-green-300 group-hoverEffect h-12">{task.name}</h4>
            </div>
          )
        })
      }
    </div>
  );
}

export default Tasks;
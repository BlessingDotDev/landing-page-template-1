import { AppWindowIcon } from "lucide-react"
import Text from "../../../../components/ui/Text"

function RightBar() {
  return (
    <div className="order-2 md:order-3 rounded-2xl">
      <div className="flex gap-3 ring-1 ring-gray-800 rounded-xl p-4">
        <h4>Sort by:</h4>
        <Text variant="subtitle">Recommended</Text>
      </div>

      <div className="bg-green-500">
        <img 
          src="#"
          alt="location on the map"
          className="bg-green-900"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3>Why choose Vision-works?</h3>

        <div className="flex items-center gap-2">
          <AppWindowIcon className="h-4 text-green-600"/>
          <div>
            <Text variant="subtitle">Verified professionals</Text>
            <Text>All providers are background checked </Text>
          </div>         
        </div>

        <div className="flex items-center gap-2">
          <AppWindowIcon className="h-4 text-green-600"/>
          <div>
            <Text variant="subtitle">24/7 customer support </Text>
            <Text>We're here to help anytime</Text>
          </div>         
        </div>
      </div>
    </div>
  );
}

export default RightBar;
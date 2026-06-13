import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import {
  ChevronLeft,
  Star, MapPinIcon,
  Heart, Share, Phone
} from "lucide-react";
import Button from "../../components/ui/Button"

function ProfilePage() {
  return (
    <>
      <Header />

      <main className="my-8 mx-6">

        <div className="flex items-centeer gap-4 mb-6">
          <ChevronLeft />
          <h4>Back to services</h4>
        </div>

        <section>
          <div className="bg-green-900/20 p-4 rounded-2xl flex flex-col gap-8 md:flex-row justify-between">
            <div className="flex items-center gap-6">
              <img
                alt="profile image"
                src="/src/assets/hero.png"
                className="h-32 w-32 ring-2 ring-gray-300 rounded-full object-cover"
              />

              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h2 >Dave the Plumber</h2>
                  <div className="flex md:hidden justify-end gap-2">
                    <Button
                      size="xs"
                      variant="secondary"
                      className="flex gap-2 self-start"
                    >
                      <Share className="h-4 w-4" />
                      Share
                    </Button>

                    <Button variant="rounded" size="round" className="self-start">
                      <Heart className="h-4 w-4 " />
                    </Button>
                  </div>
                </div>

                <p className="text-sm">Professional Plumbing Services</p>

                <div className="flex gap-4 md:items-center md:gap-8">
                  <div className="flex items-center gap-2">
                    <Star className="text-amber-300 h-3 w-3" />
                    <p className="font-semibold text-[12px]">4.5</p>
                    <p className="text-[12px]">(124 reviews)</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPinIcon className="text-gray-400 h-3 w-3" />
                    <p className="text-gray-400 text-[12px]">Acarde Pretoria</p>
                  </div>
                </div>

                <p className="text-sm  md:block">
                  Professional plumbing services. 10+ years experience
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className=" hidden md:flex justify-end gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="flex gap-2"
                >
                  <Share className="h-4 w-4" />
                  Share
                </Button>

                <Button variant="rounded" size="round">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                <Button variant="primaryHeader" className="w-1/2">
                  Chat on Whatsapp
                </Button>

                <Button variant="primaryHeader" className="flex gap-2 w-1/2 flexcenter">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>

            </div>
          </div>
        </section>
      </main>


    </>
  );
}

export default ProfilePage;
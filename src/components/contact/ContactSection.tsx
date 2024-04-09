import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid max-w-2xl px-4 gap-10 md:px-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Contact us</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Fill out the form below and well get back to you as soon as
              possible.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <Button>Send message</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

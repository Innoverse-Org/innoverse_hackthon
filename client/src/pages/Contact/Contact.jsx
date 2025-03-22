import { Card } from "../../components/ui/card"
import { Input } from "../../components/ui/Input"
import { Textarea } from "../../components/ui/Textarea"
import { Button } from "../../components/ui/Button"

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 space-y-6">
      {/* Contact Form Card */}
      <Card className="max-w-2xl w-full bg-white shadow-lg p-6 rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <form className="space-y-4">
          <Input
            type="email"
            placeholder="Your Email"
            className="w-full"
            required
          />
          <Input
            type="tel"
            placeholder="Your Contact Number"
            className="w-full"
            required
          />
          <Textarea
            placeholder="Your Question or Feedback"
            className="w-full"
            required
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  )
}

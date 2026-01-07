"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RSVP() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-12 text-center border-0 shadow-lg">
              <div className="mb-6">
                <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-light mb-4">Thank You!</h2>
              <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] text-lg">
                {"We've received your RSVP and can't wait to celebrate with you!"}
              </p>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">RSVP</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground font-[family-name:var(--font-montserrat)]">
              Please respond by May 1st, 2024
            </p>
          </div>

          <Card className="p-8 md:p-12 border-0 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required className="bg-background" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required className="bg-background" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attendance">Will you be attending? *</Label>
                <Select required>
                  <SelectTrigger id="attendance" className="bg-background">
                    <SelectValue placeholder="Select your response" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">{"Joyfully accepts - I'll be there!"}</SelectItem>
                    <SelectItem value="no">{"Regretfully declines - I can't make it"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests *</Label>
                <Select required>
                  <SelectTrigger id="guests" className="bg-background">
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietary">Dietary Restrictions</Label>
                <Input
                  id="dietary"
                  placeholder="Please list any dietary restrictions or allergies"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="song">Song Request</Label>
                <Input id="song" placeholder="Request a song for the dance floor!" className="bg-background" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message for the Couple</Label>
                <Textarea
                  id="message"
                  placeholder="Share your well wishes..."
                  className="min-h-[120px] bg-background"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
              >
                Submit RSVP
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

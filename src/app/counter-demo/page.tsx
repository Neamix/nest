"use client";

import React, { useState } from "react";
import { AnimatedCounter, AnimatedNumber, AnimatedBadge } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CounterDemo() {
  const [counter1, setCounter1] = useState(5);
  const [counter2, setCounter2] = useState(1);
  const [number, setNumber] = useState(42);
  const [badgeCount, setBadgeCount] = useState(3);

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Animated Counter Components</h1>
        <p className="text-gray-600">Built with Framer Motion and Shadcn UI</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Counter with Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Counter with Controls</CardTitle>
            <CardDescription>
              Interactive counter with increment/decrement buttons
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center">
              <AnimatedCounter
                value={counter1}
                onValueChange={setCounter1}
                min={0}
                max={20}
                size="lg"
              />
            </div>
            <div className="flex justify-center gap-2">
              <Button onClick={() => setCounter1(0)} variant="outline" size="sm">
                Reset
              </Button>
              <Button onClick={() => setCounter1(10)} variant="outline" size="sm">
                Set to 10
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Small Counter */}
        <Card>
          <CardHeader>
            <CardTitle>Small Counter</CardTitle>
            <CardDescription>
              Compact size perfect for cart items
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center">
              <AnimatedCounter
                value={counter2}
                onValueChange={setCounter2}
                min={1}
                max={10}
                size="sm"
                variant="outline"
              />
            </div>
            <p className="text-center text-sm text-gray-600">
              Current value: {counter2}
            </p>
          </CardContent>
        </Card>

        {/* Animated Number Display */}
        <Card>
          <CardHeader>
            <CardTitle>Animated Number</CardTitle>
            <CardDescription>
              Display-only animated numbers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <AnimatedNumber
                value={number}
                className="text-4xl font-bold text-primary-green"
                duration={0.8}
              />
            </div>
            <div className="flex justify-center gap-2">
              <Button onClick={() => setNumber(Math.floor(Math.random() * 1000))} size="sm">
                Random Number
              </Button>
              <Button onClick={() => setNumber(0)} variant="outline" size="sm">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Animated Badge */}
        <Card>
          <CardHeader>
            <CardTitle>Animated Badge</CardTitle>
            <CardDescription>
              Perfect for notification counts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  🛒
                </div>
                <AnimatedBadge count={badgeCount} />
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <Button onClick={() => setBadgeCount(prev => Math.max(0, prev - 1))} size="sm">
                Decrease
              </Button>
              <Button onClick={() => setBadgeCount(prev => prev + 1)} size="sm">
                Increase
              </Button>
              <Button onClick={() => setBadgeCount(0)} variant="outline" size="sm">
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Examples</CardTitle>
          <CardDescription>
            How to use these components in your code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Basic Counter:</h4>
              <code className="bg-gray-100 p-2 rounded text-sm block">
                {`<AnimatedCounter value={count} onValueChange={setCount} min={0} max={10} />`}
              </code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Animated Number:</h4>
              <code className="bg-gray-100 p-2 rounded text-sm block">
                {`<AnimatedNumber value={number} className="text-2xl font-bold" />`}
              </code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Badge Counter:</h4>
              <code className="bg-gray-100 p-2 rounded text-sm block">
                {`<AnimatedBadge count={cartItems} className="bg-red-500" />`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

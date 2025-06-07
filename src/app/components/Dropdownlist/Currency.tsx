"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

export function Currency() {
    let [currency, setCurrency] = useState('usd');
    return (
        <div className="cursor-small">
            <Select value={currency} onValueChange={setCurrency} >
                <SelectTrigger className="w-[180px] border-0">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="egp">EGP</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
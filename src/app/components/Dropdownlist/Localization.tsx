"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

export function Localization() {
    let [localization, setLocalization] = useState('en');
    return (
        <div className="cursor-small">
            <Select value={localization} onValueChange={setLocalization} >
                <SelectTrigger className="w-[180px] border-0">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ar">Arabic</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
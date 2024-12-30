"use client"
import React from "react"
import Image from "next/image"
import { UserScoreCardProps } from "../../types/users/userScoreCardProps"

const UserScoreCard: React.FC<UserScoreCardProps> = ({ username, score, isMax }) => {
    return (
        <div className="w-full flex items-center justify-between p-4 mb-4 rounded-lg border-2 border-sky-500">
            <div className="font-bold text-lg m-4">{username}</div>
            {isMax && <Image src="/images/crown.png" alt="best score" width={50} height={50} />}
            <div className="text-xl flex items-center space-x-2">
                <span>{score} X</span>
                <Image src="/images/points_logo.png" alt="points icon" width={50} height={50} />
            </div>
        </div>
    )
}

export default UserScoreCard
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Infinity } from "lucide-react";
type Props = {
    activeCourse : {imageSrc:string,title:string};
    hearts:number;
    points:number;
    hasActiveSubscription : boolean

}

export const UserProgress = ({activeCourse , points,
    hearts,
    hasActiveSubscription
} : Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href = "/courses">
                <Button variant={"ghost"}>
                    <Image className="rounded-md border" src={activeCourse.imageSrc} alt={activeCourse.title} height={32} width={32}/>
                </Button>
            </Link>
            <Link href="/shop">
            <Button variant="ghost" className="text-orange-500">
                <Image src="/points.svg" height={28} width={28} alt="Points"/>
                {points}
            </Button>
            </Link>
            <Link href="/shop">
            <Button variant="ghost" className="text-rose-500">
                <Image src="/heart.svg" height={22} width={22} alt="Hearts"/>
                {hasActiveSubscription? <Infinity className="h-4 w-4 stroke-[3]"/> : hearts}
            </Button>
            </Link>
        </div>
    )
}
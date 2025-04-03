

import Image from 'next/image'

interface OwnerRepoProps{
avatar_url: string;
name: string;

}

export function OwnerRepo({avatar_url, name }: OwnerRepoProps) {
return (
    <div>
        <Image
        src={avatar_url}
        alt='Foto usuario'
        width={24}
        height={24}
        />
        <strong>{name}</strong>
    </div>


)


}
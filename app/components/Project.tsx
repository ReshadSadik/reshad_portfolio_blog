import { BsFolder, BsGithub } from "react-icons/bs"

export default function Project({title, description, links, tags}:any) {
    return (
        <div className={"div-back rounded flex flex-col drop-shadow-2xl p-8 hover-displace bg-green-600 text-white hover:translate-8"}>
            <div className={"flex items-center justify-between"}>
                <BsFolder className="text-3xl" />
                <div className="flex justify-center gap-2">
                    <a target="_blank" href={links}>
                <BsGithub className="accent text-2xl ml-auto"/>
                    </a>
                </div>
               
            </div>
            <h4 className={"slate pt-6 cursor-default font-[600]"}>{title}</h4>
            <p className={`dark-slate pt-2 text-sm cursor-default`}>
                {description}
            </p>
            <ul className={"flex cursor-default items-center flex-wrap text-sm mt-6 dark-slate opacity-60 font-monospace"}>
                {
                    tags.map((t:any, i:any) => {
                        return <li key={i} className={'whitespace-nowrap mr-5'}>{t}</li>
                    })
                }
            </ul>
        </div>
    )
}
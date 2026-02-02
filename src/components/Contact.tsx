import isDefined from '../lib/isDefined';
import type { ACF_Contact_Type, ACF_Contacts_Type, ACF_Optional_Contacts_Type } from '../types/types';

const Contact = ({ contactData }: { contactData: ACF_Contacts_Type }) => {
    const angData = Object.entries(contactData)
        // @ts-ignore sorting strings does work, tyvm
        .sort((a, b) => a[0] - b[0])
        .map(([key, value]) => {
            if (key === 'angestellter_1' || key === 'angestellter_2') return value as ACF_Contact_Type;
            else if (contactData[`show_${key as keyof ACF_Optional_Contacts_Type}`] && typeof value !== 'boolean') return value;
            return null;
        })
        .filter(isDefined);

    return (
        <main className="relative w-(--container-width)">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:flex-row md:items-start xl:grid-cols-3">
                {angData.map((cData, idx) => (
                    <DisplayContact key={idx + cData.name} data={cData} />
                ))}
            </div>
        </main>
    );
};

export default Contact;

const DisplayContact = ({ data }: { data: ACF_Contact_Type }) => {
    const { name, aufgabe, bild, email, telefonnummer, text } = data;

    return (
        <div className="element-level-1 mx-auto h-fit w-[90%] md:w-full">
            {/* Name */}
            <div className="mb-(--content-card-padding) flex w-[calc(100%+2px)] -translate-x-px -translate-y-px flex-row items-start justify-between element-level-2 p-(--content-card-padding) text-theme-background">
                <h5 className="my-0">{name}</h5>
                <div className="relative w-1/5 self-center">
                    {/* Profilbild */}
                    <div className="element-level-1 absolute top-0 right-0 aspect-square w-20 translate-x-1/4 -translate-y-1/2 overflow-clip rounded-full border-4 shadow-black/25 outline-2 -outline-offset-5 outline-white">
                        {bild ? (
                            <img alt="chef portrait" src={bild.url} className="size-full object-cover" />
                        ) : (
                            <div className='size-full bg-theme-text/50 [mask:url("/svg/UserOutline.svg")] group-hover:bg-theme-text group-active:bg-theme-text' />
                        )}
                    </div>
                </div>
            </div>

            <div className="px-(--content-card-padding) font-gabarito text-neutral-600">{aufgabe}</div>
            <hr className="mb-(--content-card-padding-double) ml-(--content-card-padding) w-[calc(100%-var(--content-card-padding))] border-b-0 border-neutral-400" />

            {text && <p className="mb-(--content-card-padding-double) px-(--content-card-padding) text-xs whitespace-pre-wrap text-neutral-500">{text}</p>}

            <div className="my-(--content-card-padding) px-(--content-card-padding)">
                {/* Mail */}
                {email && (
                    <div className="group mb-0.5 flex w-fit items-center justify-start gap-x-2 font-gabarito text-neutral-600">
                        <div className='size-4 bg-theme-text/75 transition-[background-color] duration-100 [mask:url("/svg/EnvelopeSolid.svg")] group-hover:bg-theme-text group-active:bg-theme-text' />
                        <a href={`mailto:${email}`}>{email}</a>
                    </div>
                )}

                {/* Telefon */}
                {telefonnummer && (
                    <div className="group flex w-fit items-center justify-start gap-x-2 font-gabarito text-neutral-600">
                        <div className='size-4 bg-theme-text/75 transition-[background-color] duration-100 [mask:url("/svg/PhoneSolid.svg")] group-hover:bg-theme-text group-active:bg-theme-text' />
                        <a href={`tel:${telefonnummer}`}>{telefonnummer}</a>
                    </div>
                )}
            </div>
        </div>
    );
};

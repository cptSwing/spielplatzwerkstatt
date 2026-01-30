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
        <main className="relative min-h-[calc(var(--page-height-no-header-no-footer)-2*var(--header-footer-margin))] w-(--container-width)">
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

            {text && <p className="mb-(--content-card-padding-double) px-(--content-card-padding) text-xs whitespace-pre text-neutral-500">{text}</p>}

            <div className="my-(--content-card-padding) px-(--content-card-padding)">
                {/* Mail */}
                {email && (
                    <div className="font-gabarito text-neutral-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 inline-block size-5">
                            <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                            <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                        </svg>

                        <a href={`mailto:${email}`}>{email}</a>
                    </div>
                )}

                {/* Telefon */}
                {telefonnummer && (
                    <div className="font-gabarito text-neutral-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 inline-block size-5">
                            <path
                                fillRule="evenodd"
                                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <a href={`tel:${telefonnummer}`}>{telefonnummer}</a>
                    </div>
                )}
            </div>
        </div>
    );
};

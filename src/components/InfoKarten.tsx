import type { ACF_Info_Karten } from '../types/types';

const InfoKarten = ({ kartenData }: { kartenData: ACF_Info_Karten }) => {
    const { infokarte_1, infokarte_2, infokarte_3, infokarte_4, infokarte_5 } = kartenData;

    return (
        <div className="min-h-(--page-height-no-header-no-footer)">
            <div className="my-32 flex flex-wrap items-start justify-center gap-6">
                <div className="element-level-1 h-40 shrink-0 basis-1/4 overflow-hidden p-2">
                    <h3 className="min-h-1/2 text-center">{infokarte_1}</h3>
                    <p className="p-1 text-justify text-xs text-pretty">
                        Nunc sagittis dui vel sapien dignissim condimentum. Nam viverra vehicula elit et tempor. Donec eget mauris diam. In at blandit massa.
                        Morbi sollicitudin, massa ac consectetur fermentum, risus justo pellentesque augue, et semper ipsum dui ut felis. Praesent venenatis sit
                        amet tellus vel suscipit. Vivamus sagittis, metus at suscipit lobortis, sem libero congue est, sed aliquam velit mi ac ipsum. Quisque
                        iaculis vehicula tempus. Proin mollis suscipit pellentesque.
                    </p>
                </div>
                <div className="element-level-1 h-40 shrink-0 basis-1/4 overflow-hidden p-2">
                    <h3 className="min-h-1/2 text-center">{infokarte_2}</h3>
                    <p className="p-1 text-justify text-xs text-pretty">
                        Curabitur ultrices, arcu vitae condimentum dictum, mauris sapien laoreet erat, sit amet volutpat nisl urna id sapien. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla at iaculis mi. Praesent eu tortor euismod, pulvinar arcu
                        nec, vestibulum ipsum. Etiam semper arcu nec sem vestibulum, ac porttitor nunc tempus. Nullam rutrum arcu ornare pretium tempor. Cras
                        efficitur est nec est consectetur ultrices. Curabitur id turpis id metus mattis commodo. Suspendisse at metus sapien. Pellentesque
                        consequat in ex nec blandit.
                    </p>
                </div>
                <div className="element-level-1 h-40 shrink-0 basis-1/4 overflow-hidden p-2">
                    <h3 className="min-h-1/2 text-center">{infokarte_3}</h3>
                    <p className="p-1 text-justify text-xs text-pretty">
                        Nam sed tincidunt mauris. Morbi cursus fermentum consectetur. Morbi neque neque, tincidunt ac euismod sagittis, iaculis eget elit. Nunc
                        volutpat ante nunc, ut pulvinar sapien commodo eget. Vivamus facilisis ante mauris. Integer ac orci sit amet ligula convallis lobortis.
                        Sed pulvinar porttitor dictum. Donec ac convallis enim. Maecenas sem diam, scelerisque nec tortor eget, venenatis rhoncus nibh. Fusce
                        varius ut est vitae pulvinar. Donec varius odio sit amet nunc tempus eleifend. Nam diam sapien, commodo a libero a, ultrices feugiat
                        nibh. Donec aliquet id metus a maximus. Maecenas dictum, dolor lobortis varius lacinia, tellus nisl mollis lorem, faucibus porta enim
                        libero in leo. Vestibulum eu mi auctor, feugiat eros nec, elementum ligula.
                    </p>
                </div>
                <div className="element-level-1 h-40 shrink-0 basis-1/4 overflow-hidden p-2">
                    <h3 className="min-h-1/2 text-center">{infokarte_4}</h3>
                    <p className="p-1 text-justify text-xs text-pretty">
                        Nunc ullamcorper erat in orci fermentum, a dictum ipsum dignissim. Nam suscipit ante ut ipsum maximus, eu euismod sem interdum. Fusce
                        sed luctus massa. Ut tortor erat, egestas at tincidunt et, efficitur sit amet ligula. Maecenas maximus ut orci et faucibus. Phasellus
                        iaculis ultrices nulla nec sodales. Duis sed tellus vitae metus posuere eleifend ac id ante. Maecenas tempus neque in sem vulputate, at
                        feugiat lectus ultricies. Phasellus nec aliquam leo. Aliquam quis elit ut mauris tempus porta in sed sapien. Vivamus ornare vitae nisi
                        eu fermentum. Sed bibendum sapien ac nisi imperdiet, ut gravida quam dignissim. Nam consequat, dui eu porttitor consequat, neque mauris
                        volutpat sapien, eget rutrum nisi nunc at ex. Nullam mattis dolor sed nibh tincidunt scelerisque.
                    </p>
                </div>
                <div className="element-level-1 h-40 shrink-0 basis-1/4 overflow-hidden p-2">
                    <h3 className="min-h-1/2 text-center">{infokarte_5}</h3>
                    <p className="p-1 text-justify text-xs text-pretty">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec semper felis. Nam efficitur libero feugiat elit cursus placerat.
                        Praesent dignissim quis libero sit amet vulputate. Duis commodo volutpat sollicitudin. Vivamus pellentesque, diam eu sagittis imperdiet,
                        lorem lectus dictum nulla, nec porta quam ex sit amet nisl. Nulla efficitur, tellus non venenatis sollicitudin, libero tortor sodales
                        odio, vitae laoreet arcu enim eu metus. Praesent lobortis dolor ut iaculis posuere. Nam lobortis sagittis erat, ac facilisis elit
                        venenatis in. Suspendisse vel felis at risus semper facilisis et vitae augue. Curabitur dictum diam ut lacus posuere ultrices. Nam et
                        lectus et justo pellentesque dignissim. Fusce at hendrerit ex. Suspendisse potenti. Mauris lectus justo, fringilla quis sagittis a,
                        cursus sit amet lorem. Cras volutpat felis non placerat tempus.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoKarten;

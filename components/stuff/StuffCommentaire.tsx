import React, {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react'
import {MdLiveHelp} from "react-icons/md"


const StuffCommentaire = ({commentaire}: any) => {
    return (
        <div>
            <Popover className="relative">
                {({open}) => (
                    <>
                        <Popover.Button>
                            <MdLiveHelp
                                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-7 w-7 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel
                                className="absolute left-1/2 z-10 mt-3 -translate-x-1/2 transform px-4 sm:px-0 w-32">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative bg-dark p-2">
                                        <span className={"text-orange-300"}>
                                        {commentaire}
                                            </span>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}


export default StuffCommentaire;

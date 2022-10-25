import React from "react";

const Trainers = () => {
  return (
    <div className="w-10/12 mx-auto mt-20 lg:flex ">
      <div class=" lg:w-6/12 px-4">
        <div class="mb-12">
          <div class="bg-lime-600	 relative h-[10px] w-full rounded-2xl">
            <div class="bg-primary absolute top-0 left-0 h-full w-1/2 rounded-2xl">
              <span class="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                <span class="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                50%
              </span>
            </div>
          </div>
        </div>
        <div class="mb-12">
          <div class="bg-lime-600	 relative h-[10px] w-full rounded-2xl">
            <div class="bg-primary absolute top-0 left-0 h-full w-[75%] rounded-2xl">
              <span class="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                <span class="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                75%
              </span>
            </div>
          </div>
        </div>
        <div class="mb-12">
          <div class="bg-lime-600	 relative h-[10px] w-full rounded-2xl">
            <div class="bg-primary absolute top-0 left-0 h-full w-[90%] rounded-2xl">
              <span class="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                <span class="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                90%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-6/12"> helo</div>
    </div>
  );
};

export default Trainers;

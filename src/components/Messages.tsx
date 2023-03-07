import React from "react";

interface MessagesProps {}

export const Messages: React.FC<MessagesProps> = ({}) => {
  return (
    <div className="flex-1 overflow-auto" style={{ backgroundColor: "#DAD3CC" }}>
      <div className="px-3 py-2">
        <div className="flex justify-center mb-2">
          <div className="px-4 py-2 rounded" style={{ backgroundColor: "#DDECF2" }}>
            <p className="text-sm uppercase">February 20, 2018</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="px-4 py-2 rounded" style={{ backgroundColor: "#FCF4CB" }}>
            <p className="text-xs">
              Messages to this chat and calls are now secured with end-to-end encryption. Tap for more info.
            </p>
          </div>
        </div>

        <div className="flex mb-2">
          <div className="px-3 py-2 rounded" style={{ backgroundColor: "#F2F2F2" }}>
            <p className="text-sm text-teal">Sylverter Stallone</p>
            <p className="mt-1 text-sm">Hi everyone! Glad you could join! I am making a new movie.</p>
            <p className="mt-1 text-xs text-right text-grey-dark">12:45 pm</p>
          </div>
        </div>

        <div className="flex mb-2">
          <div className="px-3 py-2 rounded" style={{ backgroundColor: "#F2F2F2" }}>
            <p className="text-sm text-purple">Tom Cruise</p>
            <p className="mt-1 text-sm">Hi all! I have one question for the movie</p>
            <p className="mt-1 text-xs text-right text-grey-dark">12:45 pm</p>
          </div>
        </div>

        <div className="flex mb-2">
          <div className="px-3 py-2 rounded" style={{ backgroundColor: "#F2F2F2" }}>
            <p className="text-sm text-orange">Harrison Ford</p>
            <p className="mt-1 text-sm">Again?</p>
            <p className="mt-1 text-xs text-right text-grey-dark">12:45 pm</p>
          </div>
        </div>

        <div className="flex mb-2">
          <div className="px-3 py-2 rounded" style={{ backgroundColor: "#F2F2F2" }}>
            <p className="text-sm text-orange">Russell Crowe</p>
            <p className="mt-1 text-sm">Is Andrés coming for this one?</p>
            <p className="mt-1 text-xs text-right text-grey-dark">12:45 pm</p>
          </div>
        </div>

        <div className="flex mb-2">
          <div className="px-3 py-2 rounded" style={{ backgroundColor: "#F2F2F2" }}>
            <p className="text-sm text-teal">Sylverter Stallone</p>
            <p className="mt-1 text-sm">He is. Just invited him to join.</p>
            <p className="mt-1 text-xs text-right text-grey-dark">12:45 pm</p>
          </div>
        </div>

        <div className="flex justify-end mb-2">
          <div className="px-3 py-2 rounded" style={{ backgroundColor: "#E2F7CB" }}>
            <p className="mt-1 text-sm">Hi guys.</p>
            <p className="mt-1 text-xs text-right text-grey-dark">12:45 pm</p>
          </div>
        </div>

        <div className="flex justify-end mb-2">
          <div className="px-3 py-2 rounded" style={{ backgroundColor: "#E2F7CB" }}>
            <p className="mt-1 text-sm">Count me in</p>
            <p className="mt-1 text-xs text-right text-grey-dark">12:45 pm</p>
          </div>
        </div>

        <div className="flex mb-2">
          <div className="px-3 py-2 rounded" style={{ backgroundColor: "#F2F2F2" }}>
            <p className="text-sm text-purple">Tom Cruise</p>
            <p className="mt-1 text-sm">Get Andrés on this movie ASAP!</p>
            <p className="mt-1 text-xs text-right text-grey-dark">12:45 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

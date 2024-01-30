import * as Tabs from "@radix-ui/react-tabs";

function TimelineModeSwitcher() {
  return (
    <Tabs.Root defaultValue="for-you" className="w-full">
      <Tabs.List className="flex items-center">
        <Tabs.Trigger
          value="for-you"
          className="p-3 text-gray-600 hover:bg-gray-100 flex-grow text-center border-b-4 border-transparent data-[state=active]:text-black data-[state=active]:border-blue-500 data-[state=active]:font-bold"
        >
          For you
        </Tabs.Trigger>
        <Tabs.Trigger
          value="following"
          className="p-3 text-gray-600 hover:bg-gray-100 flex-grow text-center border-b-4 border-transparent data-[state=active]:text-black data-[state=active]:border-blue-500 data-[state=active]:font-bold"
        >
          Following
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}

export { TimelineModeSwitcher };

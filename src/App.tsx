function App() {
  const followHandler = async () => {
    const [tab] = await chrome.tabs.query({ active: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        document.querySelectorAll('input[value="Follow"]').forEach((item) => {
          (item as HTMLElement).click();
        });
      },
    });
  };

  const unfollowHandler = async () => {
    const [tab] = await chrome.tabs.query({ active: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        document.querySelectorAll('input[value="Unfollow"]').forEach((item) => {
          (item as HTMLElement).click();
        });
        alert("Unfollowed");
      },
    });
  };

  return (
    <div className="h-[450px] w-[350px] bg-[#00008b] flex justify-center items-center font-poppins">
      <button
        className="border border-white py-3 px-6 text-white hover:bg-white hover:text-[#00008b] transition-all"
        onClick={followHandler}
      >
        Follow
      </button>
      <button
        className="border border-white py-3 px-6 text-white hover:bg-white hover:text-[#00008b] transition-all"
        onClick={unfollowHandler}
      >
        Unfollow
      </button>
    </div>
  );
}

export default App;

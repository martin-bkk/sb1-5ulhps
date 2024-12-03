// Previous code remains the same, update the emoji picker's container div styles:

{showEmojiPicker && (
  <div className="absolute top-full left-0 mt-2 z-[1000]">
    <div className="bg-purple-900/95 backdrop-blur-sm rounded-xl overflow-hidden">
      <div className="relative">
        <button
          onClick={() => setShowEmojiPicker(false)}
          className="absolute right-2 top-2 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white z-10"
        >
          <X className="w-4 h-4" />
        </button>
        <Picker
          data={data}
          onEmojiSelect={handleEmojiSelect}
          theme="dark"
          previewPosition="none"
          skinTonePosition="none"
          maxFrequentRows={2}
          perLine={8}
          emojiSize={24}
          emojiButtonSize={32}
          navPosition="bottom"
          searchPosition="sticky"
        />
      </div>
    </div>
  </div>
)}
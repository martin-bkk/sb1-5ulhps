import React, { useState } from 'react';
import { Image, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Smile, X } from 'lucide-react';

interface PostEditorProps {
  content: string;
  setContent: (content: string) => void;
  handlePost: () => void;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploadPreview: string | null;
  setUploadPreview: (preview: string | null) => void;
  isUploading: boolean;
  setIsUploading: (uploading: boolean) => void;
}

export default function PostEditor({
  content,
  setContent,
  handlePost,
  handleFileSelect,
  uploadPreview,
  setUploadPreview,
  isUploading,
  setIsUploading
}: PostEditorProps) {
  const [textFormat, setTextFormat] = useState({
    bold: false,
    italic: false,
    underline: false,
    align: 'left' as 'left' | 'center' | 'right'
  });

  const handleTextFormat = (format: keyof typeof textFormat) => {
    if (format === 'align') {
      setTextFormat(prev => ({
        ...prev,
        align: prev.align === 'left' ? 'center' : prev.align === 'center' ? 'right' : 'left'
      }));
    } else {
      setTextFormat(prev => ({
        ...prev,
        [format]: !prev[format]
      }));
    }
  };

  return (
    <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6 mb-8">
      <div className="mb-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts..."
          maxLength={200}
          className={`w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 resize-none min-h-[100px] ${
            textFormat.align === 'center' ? 'text-center' :
            textFormat.align === 'right' ? 'text-right' : 'text-left'
          } ${textFormat.bold ? 'font-bold' : ''} ${textFormat.italic ? 'italic' : ''} ${
            textFormat.underline ? 'underline' : ''
          }`}
        />
        <div className="mt-2 text-right">
          <span className="text-white/60 text-sm">
            {content.length}/200
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTextFormat('bold')}
            className={`p-2 rounded-lg ${
              textFormat.bold ? 'bg-pink-500 text-white' : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <Bold className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleTextFormat('italic')}
            className={`p-2 rounded-lg ${
              textFormat.italic ? 'bg-pink-500 text-white' : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <Italic className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleTextFormat('underline')}
            className={`p-2 rounded-lg ${
              textFormat.underline ? 'bg-pink-500 text-white' : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <Underline className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleTextFormat('align')}
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg"
          >
            {textFormat.align === 'left' ? (
              <AlignLeft className="w-5 h-5" />
            ) : textFormat.align === 'center' ? (
              <AlignCenter className="w-5 h-5" />
            ) : (
              <AlignRight className="w-5 h-5" />
            )}
          </button>
          <label className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Image className="w-5 h-5" />
          </label>
        </div>
        <button
          onClick={handlePost}
          disabled={!content.trim() && !uploadPreview}
          className="bg-pink-500 text-white px-6 py-2 rounded-xl hover:bg-pink-600 transition-colors disabled:opacity-50"
        >
          Post
        </button>
      </div>

      {isUploading && uploadPreview && (
        <div className="relative mt-4">
          <img
            src={uploadPreview}
            alt="Preview"
            className="w-full rounded-xl"
          />
          <button
            onClick={() => {
              setIsUploading(false);
              setUploadPreview(null);
            }}
            className="absolute top-2 right-2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
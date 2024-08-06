import  { useEffect } from 'react';
import { toast } from 'sonner';
 
const imagePositions = [
  { size: 60, top: '10%', left: '15%', imageUrl: 'https://picsum.photos' },
  { size: 70, top: '30%', left: '70%', imageUrl: 'https://picsum.photos' },
  { size: 90, top: '50%', left: '25%', imageUrl: 'https://picsum.photos' },
  { size: 80, top: '20%', left: '50%', imageUrl: 'https://picsum.photos' },
  { size: 50, top: '69%', left: '40%', imageUrl: 'https://picsum.photos' },
  { size: 70, top: '70%', left: '60%', imageUrl: 'https://picsum.photos' },
  { size: 60, top: '80%', left: '20%', imageUrl: 'https://picsum.photos' },
  { size: 80, top: '50%', left: '80%', imageUrl: 'https://picsum.photos' },
  { size: 90, top: '30%', left: '9%', imageUrl: 'https://picsum.photos' },
  { size: 50, top: '85%', left: '70%', imageUrl: 'https://picsum.photos' },
  { size: 60, top: '60%', left: '10%', imageUrl: 'https://picsum.photos' },
  { size: 70, top: '40%', left: '90%', imageUrl: 'https://picsum.photos' },
  { size: 80, top: '80%', left: '45%', imageUrl: 'https://picsum.photos' },
  { size: 90, top: '90%', left: '60%', imageUrl: 'https://picsum.photos' },
  { size: 50, top: '10%', left: '80%', imageUrl: 'https://picsum.photos' }
];
 
const copyToClipboard = (text:any) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
};
 
const FundraisedSection = () => {
  useEffect(() => {
    const shareButton = document.getElementById('shareButton');
 const url="https://togetherforpriyansh.online"
    const handleShare = async () => {
      try {
   
        await navigator.share({
           text: `🌟 Support Priyansh's Fight Against Blood Cancer! 🌟
 
Your help can make a world of difference. Priyansh, a brave young soul, is battling blood cancer, and he needs our support to overcome this challenge.
 
You can contribute to his treatment and help bring hope to his journey. Every bit counts!
 
How You Can Help:
 
Donate: Visit this link to make a contribution.
Spread the Word: Share this link with your friends and family to amplify the reach and get more support.
Together, we can make a significant impact. Let's show Priyansh that he’s not alone in this fight.
 
 Donate Now: https://togetherforpriyansh.online
 
Thank you for your generosity and support! 🙏❤️
          `,
        });
        console.log('URL and image shared successfully');
      } catch (error) {
        console.error('Error sharing URL and image:', error);
        copyToClipboard(url);
        toast('URL copied to clipboard');
      }
    };
 
    if (shareButton) {
      shareButton.addEventListener('click', handleShare);
    }
 
    return () => {
      if (shareButton) {
        shareButton.removeEventListener('click', handleShare);
      }
    };
  }, []);
 
  return (
    <section id="fundraised" className="relative w-full py-24 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container flex flex-col items-center gap-6 px-4 md:px-6 lg:gap-10 z-10">
        <div className="space-y-4 text-center">
          <button id="shareButton" className="waveGen inline-block rounded-lg bg-muted px-3 py-1 text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Love. Care. Share.
          </button>
          <div className="rounded-lg px-3 py-1 text-sm">Click here to share</div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {imagePositions.map((pos, index) => (
          <img
            key={index}
            src={`${pos.imageUrl}/${pos.size}/${pos.size}?random=1${index}`}
            alt="floating"
            className={`absolute rounded-full animate-float hover:animate-float-hover image-${index}`}
            style={{
              width: `${pos.size}px`,
              height: `${pos.size}px`,
              top: pos.top,
              left: pos.left,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>
    </section>
  );
};
 

 
export default FundraisedSection;
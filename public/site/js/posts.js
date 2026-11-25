// Blog posts, newest first. Each post also has its own page at
// blog/<slug>.html holding the full article (see blog/phone-video-tips.html).
const POSTS = [{
  slug: 'how-to-set-up-your-phone-camera-for-video',
  title: 'How to set up your phone camera for the best possible video',
  excerpt: "Your phone camera is better than you think. Here's how to lock focus, exposure and white balance, and set it up properly before you press record.",
  date: '2026-11-24',
  read: '8 min read',
  cover: 'site/img/blog/how-to-set-up-your-phone-camera-for-video/01-lock-focus-exposure-white-balance.webp',
  coverAlt: 'Three cards showing focus, exposure and white balance icons, each with a padlock'
}, {
  slug: 'phone-video-tips',
  title: 'Phone video tips: how to film yourself without it looking rubbish',
  excerpt: 'Most phone videos go wrong before anyone presses record. Fixes for sound, framing and light that take five minutes.',
  date: '2026-11-22',
  read: '3 min read',
  cover: 'site/img/blog/phone-video-tips/05-leave-space.webp',
  coverAlt: 'Illustration of a person framed in the middle of a video shot, with space marked above their head and to each side'
}];
const postDate = iso => new Date(iso + 'T12:00:00').toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});
const postUrl = p => '/blog/' + p.slug;
Object.assign(window, {
  POSTS,
  postDate,
  postUrl
});

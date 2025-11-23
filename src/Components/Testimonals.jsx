import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Fashion Blogger",
    content:
      "The quality of the cotton t-shirt is unmatched. It's become my go-to daily wear. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Enthusiast",
    content:
      "Fast shipping and the headphones are exactly as described. The noise cancellation is a game changer.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Watson",
    role: "Verified Buyer",
    content:
      "Great customer service. I had to exchange a size and the process was seamless and incredibly fast.",
    rating: 4,
  },
];

export default function Testimonals() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-bold text-3xl "> What People Say </h1>
        <p>
          {" "}
          Don't just take our word for it. Here's what our community thinks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <div className="text-blue-100 absolute top-6 right-8">
                <svg
                  height="40"
                  width="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.929 15.081C15.537 14.239 16.313 13.673 17.257 13.383C17.257 13.926 17.068 14.417 16.69 14.856C16.312 15.295 15.772 15.515 15.07 15.515V21H22V13.067C22 10.999 21.272 9.231 19.816 7.764C18.36 6.297 16.592 5.564 14.512 5.564V10.165C15.602 10.165 16.486 10.53 17.164 11.261C17.842 11.992 18.181 12.876 18.181 13.914H18.04C16.909 13.914 15.936 14.288 15.121 15.037C14.306 15.786 13.899 16.711 13.9 17.812L14.017 21ZM5.017 21L5.017 18C5.017 16.896 5.321 15.923 5.929 15.081C6.537 14.239 7.313 13.673 8.257 13.383C8.257 13.926 8.068 14.417 7.69 14.856C7.312 15.295 6.772 15.515 6.07 15.515V21H13V13.067C13 10.999 12.272 9.231 10.816 7.764C9.36 6.297 7.592 5.564 5.512 5.564V10.165C6.602 10.165 7.486 10.53 8.164 11.261C8.842 11.992 9.181 12.876 9.181 13.914H9.04C7.909 13.914 6.936 14.288 6.121 15.037C5.306 15.786 4.899 16.711 4.9 17.812L5.017 21Z" />
                </svg>
              </div>

              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < t.rating ? "currentColor" : "none"}
                    className={i < t.rating ? "" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-slate-700 italic mb-6 relative z-10">
                {t.content}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
                  <span className="text-xs text-slate-500">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

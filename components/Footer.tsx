export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-ink/15">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4 text-center md:text-left">
        <span className="serif italic text-ink/60">
          © {new Date().getFullYear()} Mikaku Udon Bar
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6 label text-ink/60">
          <a
            href="https://www.instagram.com/mikaku_udon_bar/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            IG · Richmond Hill
          </a>
          <a
            href="https://www.instagram.com/mikaku_udon_bar_carlton/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            IG · Carlton
          </a>
          <a
            href="https://www.ubereats.com/ca/store/mikaku-udon-bar/zYO3gMWYUnOtK_hoZPBleQ"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            Uber Eats
          </a>
        </div>
        <span className="label text-ink/40">Made in Toronto</span>
      </div>
    </footer>
  );
}

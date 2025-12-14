export default function Footer() {
  return (
    <footer className="border-t border-muted/20 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
        <p>© {new Date().getFullYear()} Mohammad Aftab Arab</p>

        <p className="mt-2 md:mt-0">
          Network Engineering · Security · Infrastructure
        </p>
      </div>
    </footer>
  );
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
      <div className="prose  mb-16 mt-8 mx-auto max-w-6xl px-4">
        {children}
      </div>
    )
  }
export default function Layout({ children }: any) {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/user/2">User2</a>
      </nav>
      {children}
    </div>
  );
}

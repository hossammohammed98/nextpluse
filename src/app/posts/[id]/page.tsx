export default async function PostDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      post details
      <h1 className="text-center">{id}</h1>
    </div>
  );
}

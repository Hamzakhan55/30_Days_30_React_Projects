
interface ProfileCardProps {
  name: string;
  imageUrl: string;
  bio: string;
  title: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden m-4 border border-gray-200 hover:shadow-2xl transition duration-500">
      <img
        src={props.imageUrl}
        alt={`Picture of ${props.name}`}
        className="w-full h-60 object-cover object-top"
      />
      <div className="px-6 py-4 space-y-3">
        <h1 className="text-2xl font-bold text-gray-900">{props.name}</h1>
        <p className="text-sm text-indigo-600 uppercase tracking-wide">{props.title}</p>
        <p className="text-gray-700 text-base leading-relaxed">{props.bio}</p>
      </div>
      <div className="px-6 pb-4 flex justify-between">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-full text-xs font-semibold hover:bg-indigo-700 transition duration-300">
          Connect
        </button>
        <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-full text-xs font-semibold hover:bg-indigo-50 transition duration-300">
          Message
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;

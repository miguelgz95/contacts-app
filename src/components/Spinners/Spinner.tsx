export default function Spinner() {
    return (
        <div>
            <div className="w-full flex justify-center space-x-2">
                <div className="bg-sky-300 p-1.5 rounded-full animate-bounce blue-circle">
                    {}
                </div>
                <div className="bg-[#F9E286] p-1.5 rounded-full animate-bounce green-circle">
                    {}
                </div>
                <div className="bg-slate-200 p-1.5 rounded-full animate-bounce red-circle">
                    {}
                </div>
            </div>
            <style>{`
	        .blue-circle{
		        animation-delay: 0.1s;
	        }
	        .green-circle{
	        	animation-delay: 0.2s;
	        }
	        .red-circle{
		        animation-delay: 0.3s;
	        }
            `}</style>
        </div>
    );
}

import React, { useState } from 'react';
import { X, CheckCircle, XCircle, Clock, Circle } from 'lucide-react';

interface EditProjectStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
  currentStatus: string;
  onSuccess: () => void;
}

const EditProjectStatusModal: React.FC<EditProjectStatusModalProps> = ({ 
  isOpen, 
  onClose, 
  projectId, 
  currentStatus,
  onSuccess 
}) => {
  const [status, setStatus] = useState(currentStatus);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`http://localhost:8080/project/update?id=${projectId}&status=${status}`, {
        method: 'PUT'
      });

      if (response.ok) {
        onSuccess();
        onClose();
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to update project status');
      }
    } catch (err) {
      setError('An error occurred while updating the project status');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  const statusIcon = status === 'active' ? <CheckCircle className="w-5 h-5 text-green-500" /> :
                     status === 'finished' ? <XCircle className="w-5 h-5 text-red-500" /> :
                     <Clock className="w-5 h-5 text-yellow-500" />;

  const statusDescription = status === 'active' ? 'Project is active and visible to users' :
                           status === 'finished' ? 'Project is completed and archived' :
                           'Project is pending approval or review';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Update Project Status</h2>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="finished">Finished</option>
              </select>
            </div>

            <div className="flex items-center gap-2 p-4 border border-gray-200 rounded-xl">
              {statusIcon}
              <span className="text-sm font-medium text-gray-700">
                {statusDescription}
              </span>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium disabled:opacity-50"
              >
                {isLoading ? 'Updating...' : 'Update Status'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProjectStatusModal;
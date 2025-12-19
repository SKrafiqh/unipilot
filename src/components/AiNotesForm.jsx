import React, { useState } from 'react';

const subjects = [
    'Computer Networks',
    'DBMS',
    'Python',
    'Discrete Math',
    'Engineering Math',
    'Generative AI',
];

const units = ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5'];
const difficulties = ['Easy', 'Medium', 'Advanced'];

export default function AiNotesForm({ onGenerate, isGenerating, disabled }) {
    const [formData, setFormData] = useState({
        subject: subjects[0],
        unit: units[0],
        topic: '',
        difficulty: difficulties[1],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.topic.trim()) {
            onGenerate(formData);
        }
    };

    return (
        <div className="card-base p-6 bg-white dark:bg-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Subject Dropdown */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Select Subject
                        </label>
                        <select
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                            disabled={isGenerating || disabled}
                        >
                            {subjects.map((sub) => (
                                <option key={sub} value={sub}>
                                    {sub}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Unit Dropdown */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Select Unit
                        </label>
                        <select
                            value={formData.unit}
                            onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                            disabled={isGenerating || disabled}
                        >
                            {units.map((u) => (
                                <option key={u} value={u}>
                                    {u}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Topic Input */}
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Topic Name
                    </label>
                    <input
                        type="text"
                        placeholder="e.g., OSI Model, Normalization, Neural Networks"
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        required
                        disabled={isGenerating || disabled}
                    />
                </div>

                {/* Difficulty Selector */}
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Difficulty Level
                    </label>
                    <div className="flex gap-4">
                        {difficulties.map((level) => (
                            <label key={level} className="flex-1">
                                <input
                                    type="radio"
                                    name="difficulty"
                                    value={level}
                                    checked={formData.difficulty === level}
                                    onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                                    className="sr-only peer"
                                    disabled={isGenerating || disabled}
                                />
                                <div className="w-full text-center py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 peer-checked:bg-indigo-50 dark:peer-checked:bg-indigo-900/40 peer-checked:border-indigo-500 peer-checked:text-indigo-600 dark:peer-checked:text-indigo-400 cursor-pointer transition-all text-sm font-medium">
                                    {level}
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Generate Button */}
                <button
                    type="submit"
                    className={`w-full py-3.5 rounded-xl font-bold text-white transition-all shadow-lg ${isGenerating || disabled
                            ? 'bg-slate-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:shadow-indigo-500/25 active:scale-95'
                        }`}
                    disabled={isGenerating || disabled}
                >
                    {isGenerating ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Generating Notes...
                        </span>
                    ) : (
                        'Generate AI Notes'
                    )}
                </button>
            </form>
        </div>
    );
}

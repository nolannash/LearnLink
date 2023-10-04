const { OpenAIApi } = require('your-openai-library'); // Replace with the actual library you use
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Initialize the OpenAI API client with your API key
const gptKey = process.env.GPT_KEY; // Replace with your OpenAI API key
const openai = new OpenAIApi({ gptKey });

// Define constants
// const MAX_HINT_ATTEMPTS = 3; // Number of hint attempts before rewording the question

// Function to interact with ChatGPT and maintain a conversation
async function getAIResponse(messages) {
    try {
        // Send messages to GPT-3
        const response = await openai.sendMessage({
            messages: messages,
        });

        // Extract and return GPT-3's reply
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error interacting with ChatGPT:', error);
        throw new Error('Failed to get AI response');
    }
}

// Function to provide hints for the student
async function provideHints(question, studentProfile, maxHintAttempts) {
    const messages = [];

    // Customize system message based on student's profile
    const systemMessage = `You are a patient teacher providing a series of progressively more helpful and informative hints to a student with ${studentProfile} learning disabilities to help with the following question: "${question}"`;

    for (let attempt = 1; attempt <= maxHintAttempts; attempt++) {
        // Create a message for the student's input (requesting a hint)
        messages.push({ role: 'user', content: `Give me a hint for attempt ${attempt}` });

        // Create a message for GPT's response (providing a hint)
        const hint = await getAIResponse([...messages, { role: 'assistant', content: systemMessage }]);
        messages.push({ role: 'assistant', content: hint });
    }

    return messages.map((msg) => msg.content);
}

// Function to reword the question for the last attempt
async function rewordQuestion(question, studentProfile) {
    const messages = [];

    // Customize system message based on student's profile
    const systemMessage = `You are a patient teacher providing assistance to a student with ${studentProfile} to help with the following question: "${question}"`;

    // Create a message for the student's input (requesting a reworded question)
    messages.push({ role: 'user', content: 'Please reword the question in a simpler manner.' });

    // Create a message for GPT's response (rewording the question)
    const rewordedQuestion = await getAIResponse([...messages, { role: 'assistant', content: systemMessage }]);
    messages.push({ role: 'assistant', content: rewordedQuestion });

    return messages.map((msg) => msg.content);
}

module.exports = { provideHints, rewordQuestion };

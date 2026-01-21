import { useState, FormEvent, ChangeEvent } from 'react'
import { useThemeStore } from '../store/themeStore'
import { themes } from '../types/theme'
import { aboutInfo } from '../data/portfolioData'

/**
 * Componente para formulario de contacto
 * @returns Formulario de contacto funcional
 */
function ContactView(): JSX.Element {
  const { theme } = useThemeStore()
  const themeConfig = themes[theme]
  const [formData, setFormData] = useState<{
    name: string
    email: string
    subject: string
    message: string
  }>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  /**
   * Maneja el cambio en los campos del formulario
   */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Form data:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.subject.trim() !== '' &&
    formData.message.trim() !== ''

  return (
    <div className="flex flex-col h-full overflow-auto p-6">
      <div className="max-w-2xl mx-auto w-full space-y-6">
        <div className="space-y-2">
          <h1
            className="text-3xl font-light"
            style={{ color: themeConfig.text }}
          >
            Contacto
          </h1>
          <p
            className="text-sm font-light"
            style={{ color: themeConfig.textSecondary }}
          >
            ¿Tienes un proyecto en mente? Me encantaría escucharte.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {aboutInfo.contact.email && (
            <a
              href={`mailto:${aboutInfo.contact.email}`}
              className="p-4 rounded-lg border transition-all duration-200"
              style={{
                borderColor: themeConfig.border,
                backgroundColor: themeConfig.iconBackground,
                color: themeConfig.text,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = themeConfig.accent
                e.currentTarget.style.backgroundColor = themeConfig.accent + '10'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = themeConfig.border
                e.currentTarget.style.backgroundColor = themeConfig.iconBackground
              }}
            >
              <div
                className="text-xs font-medium mb-1"
                style={{ color: themeConfig.textSecondary }}
              >
                Email
              </div>
              <div className="text-sm font-light">{aboutInfo.contact.email}</div>
            </a>
          )}
          {aboutInfo.contact.github && (
            <a
              href={aboutInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border transition-all duration-200"
              style={{
                borderColor: themeConfig.border,
                backgroundColor: themeConfig.iconBackground,
                color: themeConfig.text,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = themeConfig.accent
                e.currentTarget.style.backgroundColor = themeConfig.accent + '10'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = themeConfig.border
                e.currentTarget.style.backgroundColor = themeConfig.iconBackground
              }}
            >
              <div
                className="text-xs font-medium mb-1"
                style={{ color: themeConfig.textSecondary }}
              >
                GitHub
              </div>
              <div className="text-sm font-light">Ver perfil</div>
            </a>
          )}
          {aboutInfo.contact.linkedin && (
            <a
              href={aboutInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border transition-all duration-200"
              style={{
                borderColor: themeConfig.border,
                backgroundColor: themeConfig.iconBackground,
                color: themeConfig.text,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = themeConfig.accent
                e.currentTarget.style.backgroundColor = themeConfig.accent + '10'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = themeConfig.border
                e.currentTarget.style.backgroundColor = themeConfig.iconBackground
              }}
            >
              <div
                className="text-xs font-medium mb-1"
                style={{ color: themeConfig.textSecondary }}
              >
                LinkedIn
              </div>
              <div className="text-sm font-light">Ver perfil</div>
            </a>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium"
                style={{ color: themeConfig.text }}
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-transparent border rounded-md text-sm placeholder:opacity-50 focus:outline-none transition-all duration-200 font-light"
                style={{
                  borderColor: themeConfig.inputBorder,
                  color: themeConfig.inputText,
                  backgroundColor: themeConfig.inputBackground,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = themeConfig.accent
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${themeConfig.accent}20`
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = themeConfig.inputBorder
                  e.currentTarget.style.boxShadow = 'none'
                }}
                aria-required="true"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium"
                style={{ color: themeConfig.text }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-transparent border rounded-md text-sm placeholder:opacity-50 focus:outline-none transition-all duration-200 font-light"
                style={{
                  borderColor: themeConfig.inputBorder,
                  color: themeConfig.inputText,
                  backgroundColor: themeConfig.inputBackground,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = themeConfig.accent
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${themeConfig.accent}20`
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = themeConfig.inputBorder
                  e.currentTarget.style.boxShadow = 'none'
                }}
                aria-required="true"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium"
              style={{ color: themeConfig.text }}
            >
              Asunto
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-transparent border rounded-md text-sm placeholder:opacity-50 focus:outline-none transition-all duration-200 font-light"
              style={{
                borderColor: themeConfig.inputBorder,
                color: themeConfig.inputText,
                backgroundColor: themeConfig.inputBackground,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = themeConfig.accent
                e.currentTarget.style.boxShadow = `0 0 0 3px ${themeConfig.accent}20`
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = themeConfig.inputBorder
                e.currentTarget.style.boxShadow = 'none'
              }}
              aria-required="true"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium"
              style={{ color: themeConfig.text }}
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-3 py-2 bg-transparent border rounded-md text-sm placeholder:opacity-50 focus:outline-none transition-all duration-200 font-light resize-none"
              style={{
                borderColor: themeConfig.inputBorder,
                color: themeConfig.inputText,
                backgroundColor: themeConfig.inputBackground,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = themeConfig.accent
                e.currentTarget.style.boxShadow = `0 0 0 3px ${themeConfig.accent}20`
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = themeConfig.inputBorder
                e.currentTarget.style.boxShadow = 'none'
              }}
              aria-required="true"
            />
          </div>
          {submitStatus === 'success' && (
            <div
              className="p-3 rounded-md text-sm"
              style={{
                backgroundColor: themeConfig.accent + '20',
                color: themeConfig.accent,
              }}
            >
              ¡Mensaje enviado correctamente! Te responderé pronto.
            </div>
          )}
          {submitStatus === 'error' && (
            <div
              className="p-3 rounded-md text-sm"
              style={{
                backgroundColor: '#ef4444' + '20',
                color: '#ef4444',
              }}
            >
              Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
            </div>
          )}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: isFormValid ? themeConfig.accent : themeConfig.buttonBackground,
              color: isFormValid ? '#ffffff' : themeConfig.textSecondary,
              border: `1px solid ${isFormValid ? themeConfig.accent : themeConfig.border}`,
            }}
            onMouseEnter={(e) => {
              if (isFormValid) {
                e.currentTarget.style.backgroundColor = themeConfig.accentHover
              }
            }}
            onMouseLeave={(e) => {
              if (isFormValid) {
                e.currentTarget.style.backgroundColor = themeConfig.accent
              }
            }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactView
